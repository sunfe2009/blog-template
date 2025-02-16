import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

async function syncNotionToBlog() {
  try {
    console.log('开始同步 Notion 内容...');
    console.log('使用数据库 ID:', process.env.NOTION_DATABASE_ID);
    
    // 首先测试数据库连接
    try {
      await notion.databases.retrieve({
        database_id: process.env.NOTION_DATABASE_ID
      });
      console.log('成功连接到 Notion 数据库');
    } catch (error) {
      console.error('数据库连接失败:', error.message);
      throw error;
    }

    // 获取数据库中的所有页面
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'published',
        checkbox: {
          equals: true,
        },
      },
    });

    for (const page of response.results) {
      const metadata = {
        title: page.properties.title?.title[0]?.plain_text || 'Untitled',
        description: page.properties.description?.rich_text[0]?.plain_text || '',
        pubDate: page.properties.pubDate?.date?.start || new Date().toISOString(),
        published: page.properties.published?.checkbox || false,
        heroImage: page.properties.heroImage?.url || '',
        tags: page.properties.tags?.multi_select?.map(tag => tag.name) || [],
        slug: page.properties.slug?.rich_text[0]?.plain_text || '',
      };

      // 将 Notion 页面转换为 Markdown
      const mdBlocks = await n2m.pageToMarkdown(page.id);
      const mdString = n2m.toMarkdownString(mdBlocks);

      // 组合 frontmatter 和内容
      const frontmatter = yaml.dump(metadata);
      const fileContent = `---\n${frontmatter}---\n\n${mdString}`;

      // 使用 slug 作为文件名
      const fileName = `${metadata.slug || metadata.title.toLowerCase().replace(/\s+/g, '-')}.md`;
      const filePath = path.join(process.cwd(), 'src/content/blog', fileName);
      
      await fs.writeFile(filePath, fileContent, 'utf-8');
    }

    console.log('Successfully synced Notion content to blog');
  } catch (error) {
    console.error('同步过程中出现错误:', error);
    console.error('错误详情:', {
      code: error.code,
      message: error.message,
      status: error.status
    });
    process.exit(1);
  }
}

syncNotionToBlog(); 