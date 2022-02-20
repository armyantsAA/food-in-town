function home() {
  return <div>home</div>;
}

export default home;

export async function getServerSideProps(context) {
  if (context.params.authenticated) {
    return { props: {} };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/admin",
      },
      props: {},
    };
  }
}
