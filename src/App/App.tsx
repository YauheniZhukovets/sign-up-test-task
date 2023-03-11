import React, { FC } from 'react'

import s from './App.module.css'

export const App: FC = () => {
	return (
		<div className={s.mainWrapper}>
			<div className={s.mainInfo}>
				<div className={s.mainInfoTitle}>
					<h1>Sign up</h1>
				</div>
			</div>
			<div className={s.mainContent}></div>
		</div>
	)
}
