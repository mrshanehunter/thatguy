// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
import projects from './projects';
import streams from './streams';
import brands from './brands';
import markets from './markets';
import webs from './webs';
import carousels from './carousels';
import abouts from './abouts';
import bsummarys from './bsummarys';
import msummarys from './msummarys';
import wsummarys from './wsummarys';
import definitions from "./definitions";
import questions from "./questions";
import policys from "./policys";
import sections from "./sections";
import paragraphs from "./paragraphs";

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    projects,
    streams, 
    brands, 
    markets, 
    webs, 
    carousels, 
    abouts, 
    bsummarys, 
    msummarys, 
    wsummarys, 
    definitions, 
    questions,
    policys,
    sections,
    paragraphs,
  ]),
})
