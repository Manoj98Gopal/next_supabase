import { readFile } from 'fs/promises';
import { html } from 'satori-html';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

export async function POST(request) {
  try {
    const { htmlContent } = await request.json();

    const template = html(htmlContent);

    const svg = await satori(template, {
      width: 600,
      height: 400,
      fonts: [
        {
          name: 'VictorMono',
          data: await readFile('./public/fonts/VictorMono-Bold.ttf'),
          weight: 700,
          style: 'normal',
        },
      ],
    });

    const resvg = new Resvg(svg);
    const pngBuffer = resvg.render().asPng();

    return new Response(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'attachment; filename=post-image.png',
      },
    });
  } catch (error) {
    console.error('Error generating image:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate image' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
