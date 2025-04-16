import { getErrorMessage, login } from "../page-components/login-page";
import { loadPage } from "../page-components/app";

/**
 * Organise high-level application actions in these orchestrator files.
 * These represent interactions with the system as well as interrogations about the system state.
 * Example: `loadLoginPageAndAuthenticate` represents an interaction, because it doesn't produce a result, but rather a side-effect;
 *  while `getLoginPageErrorMessage` represents an interrogation about the system state.
 */

export const getLoginPageErrorMessage = async (): Promise<string> =>
  getErrorMessage();

export const loadLoginPageAndAuthenticate = async (
  password: string,
  username: string,
): Promise<void> => {
  await loadPage();
  await login(password, username);
};
