import { Helmet } from 'react-helmet'
import cn from 'classnames'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import './Page.css'
export const Page = ({
  metatags,
  headerProps,
  footerLinksData,
  footerAuthor,
  content,
}) => {
  console.log(footerLinksData)
  return (
    <div className="Page">
      <Helmet>
        <title>{metatags.title}</title>
        <meta name="description" content={metatags.description} />
      </Helmet>
      <Header
        title={headerProps.title}
        buttons={headerProps.buttons}
        className={cn('Page-Header Page-container', {
          isSettings: headerProps.isSettingsStatus === true,
        })}
      />
      <div className="Page-Content Page-container">{content}</div>
      <div className="Page-Footer">
        <Footer
          className="Page-container"
          linksData={footerLinksData}
          author={footerAuthor}
        />
      </div>
    </div>
  )
}
