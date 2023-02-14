import { css } from 'styled-components';

const variables = css`
  :root {
    /* fonts  */
    --Primary-font: 'Nunito', sans-serif;
    /* color  */
    --white: white;
    --primary-text: #333;
    --primary-dark: #171717;
    --btn-text-hover: #6366f1;

    --secondary-text: #555;
    --secondary-text_2: #737373;
    /* --secondary-text_2: rgba(82, 91, 113, 0.7); */
    --background-primary: #5cb85c;

    --background-primary_4: hsla(0, 0%, 100%, 0.93);
    --btn-hover: #eef2ff;
    --btn-hover_2: hsla(226, 100%, 97%, 0.93);

    --shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
      0px 1px 2px -1px rgba(16, 24, 40, 0.1);
    --shadow_2: 0px 1px 2px rgba(16, 24, 40, 0.05);

    --border: #e5e5e5;
    --border-2: #ddd;

    --danger: #eb5757;
    --danger-bg: hsl(0, 79%, 95%);
    --success: #27ae60;
    --success-bg: #eefbf4;
    --warning: #eca72c;
    --warning2: #fd9727;
    --warning-bg: #fdf7ec;
    /* --border-2: #ebf1ff;
    --border-3: #e4e7ec; */
    --faingrey: #f9fafb;
    --faintline: #eaf1fa;
  }
`;
export default variables;
