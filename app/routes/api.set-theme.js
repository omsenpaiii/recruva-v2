export async function action({ request }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  // Since we're removing the Cloudflare session handling, we can just return the response
  return {
    status: 'success',
    theme: theme
  };
}
