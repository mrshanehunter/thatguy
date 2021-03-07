export default {
    name: 'carousels',
    title: 'Carousel Banners',
    type: 'document',  
    fields: [
          {
            name: 'image',
            title: 'Service Icon Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'sequence',
            title: 'Banner Sequence Number',
            type: 'number',
            description: 'Order with numbers for sorting',
          },   
    ],      
}