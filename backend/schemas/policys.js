export default { 
  name: 'policys',
  title: 'Policy',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Document Name',
      type: 'string',
      description: 'The name of the document as it is to appear online',
    },
    {
      name: 'statement',
      title: 'Statemment',
      type: 'text',
      description: 'The preamble statement to appear at top of document',
    },
    {
      name: 'upd',
      title: 'Last Update Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    
    ],
    
    
  
  
    
  
};