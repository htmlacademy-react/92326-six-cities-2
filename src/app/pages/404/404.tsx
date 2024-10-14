import notFound from '../../../assets/img/404.svg';

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: '#fcb82f',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={notFound}
        alt="404 Page not found"
        style={{
          objectFit: 'contain',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
