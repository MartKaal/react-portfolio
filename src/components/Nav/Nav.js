import React from 'react';
import styles from './Nav.module.css';

function Nav() {
	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li>
						<a href="#">Contact</a>
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
							<g id="Theme_icon" transform="translate(-1225.846 -150)">
								<circle id="Ellipse_1" data-name="Ellipse 1" cx="16" cy="16" r="16" transform="translate(1225.845 150)" fill="" />
								<g id="Group_4" data-name="Group 4" transform="translate(3.32 3.361)">
									<g id="Ellipse_2" data-name="Ellipse 2" transform="translate(1229.526 153.639)" fill="none" stroke="#fff" stroke-width="2">
										<circle cx="9" cy="9" r="9" stroke="none" />
										<circle cx="9" cy="9" r="8" fill="none" />
									</g>
									<path id="Path_3" data-name="Path 3" d="M-1166.5,416v17.1l3.422-.693,2.311-1.6,1.639-2.353.966-3.151-.462-3.151-1.639-2.731-1.723-1.429-2.269-1.219-1.471-.21Z" transform="translate(2405.082 -262.297)" fill="#fff" />
								</g>
							</g>
						</svg>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
