export default {
  name: 'streams',
  title: 'Revenue Streams',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Stream Name',
      type: 'string',
      description: 'As it is to appear on the Services Page',
    },
    {
      name: 'definition',
      title: 'Definition',
      type: 'text',
      description: 'A brief definition of what the service stream covers',
    },
    {
      name: 'event_key',
      title: 'Event Key',
      type: 'string',
      description: 'Sequentially ordered number starting at 0 for mobile display',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
      description: 'The page name for the service stream',
    },
    {
      name: 'benefit',
      title: 'Benefit',
      type: 'text',
      description: 'A brief of who could benefit from using this stream',
    },
    {
      name: 'why',
      title: 'Why It Matters',
      type: 'text',
      description: 'How will buying this make their business better?',
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