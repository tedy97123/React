import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client= sanityClient({
    projectId:'vmyqjj8j',
    dataset:'production',
    apiVersion:'2022-07-28',
    useCdn:true,
    token: 'skt59EfQk9OtNQIxBp65eI8CqCnwf4ddta8IrVS8rOyPecXWfN92WiQTOMiMiqeIMDWj4EgECefpwTVCYHQyGm5oWKTLdYsJQ8jFynzY5GwKqcoDUrHbdUsu3DXEMFZ9q6rKExvceTk184ShFxdagPBn3mzTT7wt0dkom2R1eSguKRQg2kMi',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)