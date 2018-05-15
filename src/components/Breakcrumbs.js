import NavLink from 'umi/navlink'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'
import paths from '../utils/breadcrumbs'

export default withBreadcrumbs(paths)(({ breadcrumbs }) => (
  <div>
    {breadcrumbs.map((breadcrumb, index) => (
      <span key={breadcrumb.key}>
        <NavLink to={breadcrumb.props.match.url}>
          {breadcrumb}
        </NavLink>
        {(index < breadcrumbs.length - 1) && <i> / </i>}
      </span>
    ))}
  </div>
))