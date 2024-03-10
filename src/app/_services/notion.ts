"use server"
import { Client } from '@notionhq/client'
import { NotionProjectDatabaseResponse } from '../_types/notion_projects';
import { NotionInformationDatabaseResponse } from '../_types/notion_information';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getInformation() {
  const databaseId = 'beda52b5feda49709ad849cf0fa619f8';
  // https://www.notion.so/beda52b5feda49709ad849cf0fa619f8?v=18c05073e0f54c788c8d559b4e2a0016&pvs=4
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const typedResponse = (response as unknown) as NotionInformationDatabaseResponse

  return {
    id: typedResponse.results[0].id,
    name: typedResponse.results[0].properties.name.title[0].plain_text,
    about: typedResponse.results[0].properties.about.rich_text[0].plain_text,
    about_by: typedResponse.results[0].properties.about_by.rich_text[0].plain_text,
    slogan: typedResponse.results[0].properties.slogan.rich_text[0].plain_text,
    addr: typedResponse.results[0].properties.addr.rich_text[0].plain_text,
    phone: typedResponse.results[0].properties.phone.phone_number,
    email: typedResponse.results[0].properties.email.email,
    about_role: typedResponse.results[0].properties.about_role.rich_text[0].plain_text,
  }
}

export async function getProjects() {
  const databaseId = '118e00c0a0bd45c28ca1d8730fbc8142';
  const response = await notion.databases.query({
    database_id: databaseId,

    sorts: [
      {
        "timestamp": "created_time",
        "direction": "descending"
      }
    ]
  });

  const typedResponse = (response as unknown) as NotionProjectDatabaseResponse
  
  return typedResponse.results.map((project) => {
    return {
      id: project.id,
      slug: project.properties.slug.rich_text[0].plain_text,
      name: project.properties.name.title[0].plain_text,
      description: project.properties.description.rich_text[0].plain_text,
      image: project.properties.images.files[0].file.url,
      createdAt: project.created_time
    }
  })
}
