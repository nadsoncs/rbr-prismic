import { CreatedBy, LastEditedBy, Name, PageOrDatabase, Parent, RichText } from "./notion"

export interface NotionInformationDatabaseResponse {
  object: string
  results: InformationResult[]
  next_cursor: any
  has_more: boolean
  type: string
  page_or_database: PageOrDatabase
  request_id: string
}

export interface InformationResult {
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
  name: Name
  about: About
  about_by: AboutBy
  slogan: Slogan
  addr: Addr
  phone: Phone
  email: Email
  about_role: AboutRole
}

export interface About {
  id: string
  type: string
  rich_text: RichText[]
}

export interface AboutBy {
  id: string
  type: string
  rich_text: RichText[]
}

export interface AboutRole {
  id: string
  type: string
  rich_text: RichText[]
}

export interface Slogan {
  id: string
  type: string
  rich_text: RichText[]
}

export interface Addr {
  id: string
  type: string
  rich_text: RichText[]
}
export interface Phone {
  id: string
  type: string
  phone_number: string
}

export interface Email {
  id: string
  type: string
  email: string
}