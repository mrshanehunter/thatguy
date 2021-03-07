export default {
    name: 'webs',
    title: 'Website Services',
    type: 'document',  
    fields: [
        {
            name: 'name',
            title: 'Service Stream Name',
            type: 'string',
            description: 'Name of the Service Stream',
          },
          {
            name: 'description',
            title: 'Service Description',
            type: 'text',
            description: 'Brief Description of the Service',
          },
          {
            name: 'image',
            title: 'Service Icon Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'inclusion1',
            title: 'Inclusion 1',
            type: 'string',
            description: 'Starting with >> Short Description of Service Inclusion',
          },   
          {
            name: 'inclusion2',
            title: 'Inclusion 2',
            type: 'string',
            description: 'Starting with >> Short Description of Service Inclusion',
          },   
          {
            name: 'inclusion3',
            title: 'Inclusion 3',
            type: 'string',
            description: 'Starting with >> Short Description of Service Inclusion',
          },   
          {
            name: 'inclusion4',
            title: 'Inclusion 4',
            type: 'string',
            description: 'Starting with >> Short Description of Service Inclusion',
          },   
          {
            name: 'inclusion5',
            title: 'Inclusion 5',
            type: 'string',
            description: 'Starting with >> Short Description of Service Inclusion',
          },   
          {
            name: 'inclusion6',
            title: 'Inclusion 6',
            type: 'string',
            description: 'Short Description of Service Inclusion',
          },   
    ],      
}