import { useState } from "react";

//Icons should be kept in alphabetical order!

interface IconProps {
  width?: string;
  height?: string;
  color: string;
  /** Optional hover color */
  hoverColor?: string;
  /** add custom styles if needed */
  className?: string;
}

/**
 * Sort Icon
 * @param props - Svg props for width, height, and color
 * @returns
 */
function CodeSandBoxIcon(props: IconProps) {
  const [hover, setHover] = useState<boolean>(false);
  const hoverColor = props.hoverColor;

  const CodeSandBoxIcon = (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 600 600"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M150 150h299.832v300H150V150zm269.168 30.682v238.636H180.665V180.682h238.503z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
  return CodeSandBoxIcon;
}
/**
 * Sort Icon
 * @param props - Svg props for width, height, and color
 * @returns
 */
function GitHubIcon(props: IconProps) {
  const [hover, setHover] = useState<boolean>(false);
  const hoverColor = props.hoverColor;

  const GitHubIcon = (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <path
        fill={props.color}
        fillRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0112.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
  return GitHubIcon;
}

/**
 * Sort Icon
 * @param props - Svg props for width, height, and color
 * @returns
 */
function SortIcon(props: IconProps) {
  const [hover, setHover] = useState<boolean>(false);
  const hoverColor = props.hoverColor;

  const SortIcon = (
    <svg
      className={props.className}
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <path
        d="M6.66667 14.1667H3.33333C3.09722 14.1667 2.89944 14.0867 2.74 13.9267C2.58 13.7673 2.5 13.5695 2.5 13.3334C2.5 13.0973 2.58 12.8995 2.74 12.7401C2.89944 12.5801 3.09722 12.5001 3.33333 12.5001H6.66667C6.90278 12.5001 7.10083 12.5801 7.26083 12.7401C7.42028 12.8995 7.5 13.0973 7.5 13.3334C7.5 13.5695 7.42028 13.7673 7.26083 13.9267C7.10083 14.0867 6.90278 14.1667 6.66667 14.1667ZM16.6667 5.83341H3.33333C3.09722 5.83341 2.89944 5.75369 2.74 5.59425C2.58 5.43425 2.5 5.23619 2.5 5.00008C2.5 4.76397 2.58 4.56591 2.74 4.40591C2.89944 4.24647 3.09722 4.16675 3.33333 4.16675H16.6667C16.9028 4.16675 17.1006 4.24647 17.26 4.40591C17.42 4.56591 17.5 4.76397 17.5 5.00008C17.5 5.23619 17.42 5.43425 17.26 5.59425C17.1006 5.75369 16.9028 5.83341 16.6667 5.83341ZM11.6667 10.0001H3.33333C3.09722 10.0001 2.89944 9.92008 2.74 9.76008C2.58 9.60064 2.5 9.40286 2.5 9.16675C2.5 8.93064 2.58 8.73258 2.74 8.57258C2.89944 8.41314 3.09722 8.33341 3.33333 8.33341H11.6667C11.9028 8.33341 12.1008 8.41314 12.2608 8.57258C12.4203 8.73258 12.5 8.93064 12.5 9.16675C12.5 9.40286 12.4203 9.60064 12.2608 9.76008C12.1008 9.92008 11.9028 10.0001 11.6667 10.0001Z"
        fill={hover ? hoverColor : props.color}
      />
    </svg>
  );
  return SortIcon;
}

export { CodeSandBoxIcon, GitHubIcon, SortIcon };
