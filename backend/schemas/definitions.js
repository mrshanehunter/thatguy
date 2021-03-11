export default {
    name: 'definitions',
    title: 'Definitions',
    type: 'document',  
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'Name of the word being defined',
          },
          {
            name: 'def',
            title: 'Definition',
            type: 'text',
            description: 'The definition',
          },
          {
            name: 'type',
            title: 'Type of Word',
            type: 'string',
            description: 'Noun, verb, adjective etc.',
          },
          {
            name: 'sequence',
            title: 'Sequence',
            type: 'number',
            description: 'For display ordering purposes', 
          },         
    ],      
}