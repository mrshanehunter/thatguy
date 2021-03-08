export default {
  name: 'bsummarys',
  title: 'Branding Page Summarys',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Branding Page Summary',
      type: 'text',
      description: 'Summary of Branding Services',
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