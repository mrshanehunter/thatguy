export default {
  name: 'msummarys',
  title: 'Marketing Page Summarys',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Marketing Page Summary',
      type: 'text',
      description: 'Summary of Marketing Services',
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