

const posts = []

const images = [
    'image/yash.jpg',
    'image/be90f5192db75521120e1fd2bc304c58.jpg',
    'image/cab2deea9d57efd504fdf624b87ea8f6.jpg',
    'image/06b151b9229a156626192f9725c7e3a4.jpg',
    'image/ca90053f27905f6a0256e77c2a4104c1.jpg',
    'image/766d5078f5df5b5e69b925c389c24262.jpg',
    'image/1340cfd8ec231fb321b9162dd5d2ecf9.jpg',
    'image/a6752b294c2b5d087f9736b119122b19.jpg',
    'image/b68a701213f09d4479070421accdb44d.jpg',
    'image/6dedad236af7427cd8cd15b1fd08b419.jpg',
    'image/JASHAN EVENTS.jfif',
    'image/76272200b5588fbaf33cc6e7d87ccc0d.jpg',
    'image/2210e70335196ae0ac387fb0941d0dab.jpg',
    'image/3d727bdb5e35549b184ce411d4fa95b8 (1).jpg',
    'image/3fd03240503cd0c0d9611bc4995a1592.jpg',
    'image/138bf0c3f0e0cdf62eab1a8250a11a8d.jpg',
    'image/cf3fc822aa73ca5e30218eb39219c9d0.jpg',
    'image/pre-wedding-shoot-3-1024x630.jpg',
    'image/rupinder-singh-M8YKi58QKrM-unsplash.jpg',
    'image/f73e4d52062bb74856906ecb50ce1e48.jpg',
    'image/d3ff3e2d525d8ab19347d60fc32ded75.jpg',
    'image/d7b405e896cfe924b671e318b9666d82.jpg',
    'image/9054b82959e9499b6a9a04be0efcd05e.jpg',
    'image/photo-1587271636175-90d58cdad458.jfif',
    'image/1 (3).jpg',
    'image/0f8601b92824daa1f84993c2d417427d.jpg',
    'image/9208c12f8d7b06a022670c4ba2ed0d9e.jpg',
    'image/1dca51753029bb4163ebdd10cc8fb139.jpg',
    'image/9d256bf803fe618e7c1676ebb95b1fb8.jpg',
    'image/69d55ad508f73b45a0ec0a6b0b585259.jpg',
    'image/44.jpg',
    'image/385454c603d3a2fc92eafdb30fe7b462.jpg',
    'image/c963d216af9fd1a13087eb0c5b886f35.jpg',
    'image/images.jfif',
    'image/images (1).jfif',
    'image/Wedding-1.jpg',
    'image/296f2eefd3b78f58b03ef127cb84cc6f.jpg',
    'image/7ee4191909b958dd68349dd40445b266.jpg',
    'image/c5940cd181854afecf92d7b1c3a491ec.jpg',
    'image/f7591ef2ba6eb343b1c2e5ae97c95fb9.jpg',
    'image/d7b5e54014b5c5aa09242f32eab417e2.jpg',
    'image/a13afb40a61a1b6bccaa90f92b505823.jpg',
    'image/4a6a267c1b6599c6494e1c1c1b21f85d.jpg',
    'image/296f2eefd3b78f58b03ef127cb84cc6f.jpg',
    'image/adc3a7700c0a5fd18a7f11cc1aedf9af.jpg',
    'image/9398c4f3dd47efe481dd8420cce5230c.jpg',
    'image/664ee4af75591e044e3448cf260cb304.jpg',
    'image/e4458d93776c94097bf1d3ac7fa904fa (1).jpg',
    'image/154c3cc9dc39358f3bcf8cdaedff1557.png',
    'image/e4458d93776c94097bf1d3ac7fa904fa.jpg',
    'image/196bc576038c2ecca7bb22eb46f4f54e.jpg',
    'image/a3e4fbea4e1dd46e2a19ad7111cc7de0.jpg',
    'image/canon-pro-sanjay-eos-r-1-1140.jfif',
    'image/d4097c00796767fb69933993e4bf7b9a (1).jpg',
    'image/f7591ef2ba6eb343b1c2e5ae97c95fb9.jpg',

    

]

let imageIndex = 0;

for(let i = 1; i <= 55; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        date: `${i < 10 ? 0 : ''}${i}/10/2021 `,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)
