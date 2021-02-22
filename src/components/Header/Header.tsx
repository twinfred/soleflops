interface IHeader {
  primaryName: string;
}

export default function Header(props: IHeader) {
  return (
    <div id="Header" className="header-wrapper" data-testid="Header">
      { props.primaryName }
    </div>
  )
}