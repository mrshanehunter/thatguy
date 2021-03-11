export default {
    name: 'paragraphs',
    title: 'Paragraphs',
    type: 'document',
    fields: [
        {
          name: 'paraNo',
          title: 'Paragraph Number',
          type: 'number',  
          description: 'Starting at 1, the number of the paragraph within the section',
        },
        {
          name: 'paraText',
          title: 'Paragraph Text',
          type: 'text',
          description: 'The actual paragraph text / copy',
        },
        {
          name: 'sections',
          type: 'reference',
          to: [
            {
              type: 'sections',
            },
          ],
        },
    ],
}