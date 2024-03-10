import { CreatedBy, Images, LastEditedBy, Name, PageOrDatabase, Parent, RichText } from "./notion"

export interface NotionProjectDatabaseResponse {
  object: string
  results: ProjectResult[]
  next_cursor: any
  has_more: boolean
  type: string
  page_or_database: PageOrDatabase
  request_id: string
}

export interface ProjectResult {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  properties: Properties
  url: string
  public_url: any
}

export interface Properties {
  description: Description
  slug: Slug
  images: Images
  name: Name
}


export interface Description {
  id: string
  type: string
  rich_text: RichText[]
}

export interface Slug {
  id: string
  type: string
  rich_text: RichText[]
}