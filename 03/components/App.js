import Task05 from './../../05/Task05';
import NotFound from './NotFound';

const App = () => {
  const routes = [
    { url: '/task01', text: '01' },
    { url: '/task02', text: '02' },
    { url: '/task03', text: '03' },
    { url: '/task04', text: '04' },
    { url: '/task05', text: '05' },
  ];
  return (
    <Router>
      <nav>
        <ul>
          {routes.map((item) => (
            <li key={item.url}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route path="/task01" component={Task01} />
        <Route path="/task02" component={Task02} />
        <Route path="/task03" component={Task03} />
        <Route path="/task04" component={Task04} />
        <Route path="/task05" component={Task05} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;