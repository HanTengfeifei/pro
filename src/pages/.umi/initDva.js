import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/models/list.js').default) });
app.model({ namespace: 'login', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/models/login.js').default) });
app.model({ namespace: 'menu', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/models/menu.js').default) });
app.model({ namespace: 'project', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/pages/User/models/register.js').default) });
app.model({ namespace: 'activities', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/pages/Dashboard/models/activities.js').default) });
app.model({ namespace: 'chart', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/pages/Dashboard/models/chart.js').default) });
app.model({ namespace: 'monitor', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/pages/Dashboard/models/monitor.js').default) });
app.model({ namespace: 'form', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/pages/Forms/models/form.js').default) });
app.model({ namespace: 'rule', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/pages/List/models/rule.js').default) });
app.model({ namespace: 'profile', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/pages/Profile/models/profile.js').default) });
app.model({ namespace: 'error', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/pages/Exception/models/error.js').default) });
app.model({ namespace: 'geographic', ...(require('/Users/hantengfei/Desktop/projects/ant design pro/ant-design-pro/src/pages/Account/Settings/models/geographic.js').default) });
