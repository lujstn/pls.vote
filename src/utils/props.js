// @flow
type anonymous = {
  available: boolean,
  copy: string,
  url: string,
}

type reminder = {
  email_address: string,
  email_body: string,
}

type registration = {
  online: boolean,
  url: string,
  copy: string,
  est_time: string,
}

type frontmatter = {
  path: string,
  country: string,
  country_name: string,
  title: string,
  description: string,
  registration: registration,
  reminder: reminder,
  qualifiers: Object,
  anonymous: anonymous,
}

export type FrontmatterProps = {
  data: {
    markdownRemark: {
      frontmatter: frontmatter,
    },
  },
}
