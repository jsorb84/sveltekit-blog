export async function GET({ request }): Promise<Response> {
	console.log(request);
	return new Response(JSON.stringify({}));
}

export async function POST({ request }): Promise<Response> {
	console.log(await request.json());
	return new Response(JSON.stringify({}));
}
