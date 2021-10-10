const IconStyle = {
  padding: '0',
  margin: '0',
}

// TODO: сделать передачу и style и className
export const Icon = ({ icon, className = '', alt = '' }) => {
  return <img style={IconStyle} src={icon} className={className} alt={alt} />
}
