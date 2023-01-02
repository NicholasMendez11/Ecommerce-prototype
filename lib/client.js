import  SanityClient  from "@sanity/client";
import  imageUrlBuilder from "@sanity/image-url";


export const client = SanityClient({
    projectId:'0ojwmx24',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

//como tenemos un field para imagenes debemos habilitarlo pasando el client que hicimos como parametro a un imageUrlBuilder
const builder = imageUrlBuilder(client);

//esto nos deja acceder al url donde sanity tiene todas nuestras imagenes
export const urlFor = (source) => builder.image(source);