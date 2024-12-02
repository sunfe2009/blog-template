<script lang="ts">
	import { onMount } from "svelte";
	import { atUriToPostUri, getUserPosts, getLikes, getPost, getComments } from "./utils";
	import { cn } from "src/utils";
	import Comment from "./Comment.svelte";
  
	let { uri, likesCount, likesData, user, comments } = $props();
  
	let postUri = $state(uri);
  
	onMount(async () => {
	  if (!uri && user) {
		let posts = await getUserPosts(user);
  
		const url = window.location.href;
  
		// @ts-expect-error: weird type fuckery
		const post = posts.find((post) => post.post.embed?.external?.uri === url);
  
		if (post) {
		  postUri = post.post.uri;
		  comments = await getComments(post.post.uri);
		}
	  } else if (uri) {  
		comments = await getComments(uri);
	  }

	  console.log(comments);
	});
  </script>
  
  <div class="not-prose mt-8">
  
  {#if comments.length > 0}
	<div>
		{#each comments as comment}
			<Comment comment={comment} />
		{/each}
	</div>
  {/if}

</div>