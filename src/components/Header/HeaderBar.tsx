interface IHeaderBar {
  link: string;
  message: string;
}

export default function HeaderBar(props: IHeaderBar) {
  return (
    <a href={ props.link } id="Header" className="header-wrapper" data-testid="Header">
      { props.message }
    </a>
  )
}