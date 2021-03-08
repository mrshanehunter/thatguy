export default {
  name: 'abouts',
  title: 'Profiles for About Page',
  type: 'document',
  fields: [
    {
      name: 'firstname',
      title: 'Profile First Name',
      type: 'string',
      description: 'First Name of Profiled Person',
    },
    {
      name: 'lastname',
      title: 'Profile Last Name',
      type: 'string',
      description: 'Last Name of Profiled Person',
    },
    {
      name: 'image',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'para1',
      title: 'Profile Paragraph 1',
      type: 'text',
      description: 'Profile Paragraph',
    },
    {
      name: 'para2',
      title: 'Profile Paragraph 2',
      type: 'text',
      description: 'Profile Paragraph',
    },
    {
      name: 'para3',
      title: 'Profile Paragraph 3',
      type: 'text',
      description: 'Profile Paragraph',
    },
    {
      name: 'para4',
      title: 'Profile Paragraph 4',
      type: 'text',
      description: 'Profile Paragraph',
    },
    {
      name: 'para5',
      title: 'Profile Paragraph 5',
      type: 'text',
      description: 'Profile Paragraph',
    },   
  ],
}