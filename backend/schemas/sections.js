export default {
    name: 'sections',
    title: 'Sections',
    type: 'document',
    fields: [
        {
         name: 'sectNo',
         title: 'Section Number',   
         type: 'number',
         description: 'Starting at 1, the number of the section',
        },
        {
         name: 'sectHead',
         title: 'Section Heading',
         type: 'string',
         description: 'The name of the section',
        },
        {
          name: 'policys',
          type: 'reference',
          to: [
            {
              type: 'policys',
            }
          ]
        },
    ],
}