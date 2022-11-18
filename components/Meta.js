import Head from "next/head"

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

Meta.defaultProps = {
  title: "Seetizen | Make the City Speak",
  description: "",
  keywords:
    "giovani, attivismo, app, innovazione, sociale, social, innovation, social good, local network",
}
export default Meta
