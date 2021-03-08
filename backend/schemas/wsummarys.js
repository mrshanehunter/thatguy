export default {
  name: 'wsummarys',
  title: 'Website Page Summarys',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Website Page Summary',
      type: 'text',
      description: 'Summary of Website Services',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },      
  ],
}