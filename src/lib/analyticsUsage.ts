import { trackPageView, trackEvent, identifyUser } from '../../analytics';
import { ANALYTICS_CONFIG } from '../ownanalyticsconfig';

export const trackAppPageView = () => {
  trackPageView('Todo App Main', {
    page_name: 'dashboard',
    timestamp: Date.now()
  }).catch(() => {});
};

export const trackTodoAction = (action: string, todoId?: string) => {
  trackEvent('todo_action', {
    action_type: action,
    todo_id: todoId,
    timestamp: Date.now()
  }).catch(() => {});
};

export const identifyAppUser = () => {
  // Simulating anonymous user identification for non-auth app
  const anonymousId = 'anon_' + Math.random().toString(36).substring(7);
  identifyUser(ANALYTICS_CONFIG.VITE_ANALYTICS_USER_ID.toString(), {
    distinctId: anonymousId,
    userType: 'anonymous',
    visitTime: Date.now()
  }).catch(() => {});
};
