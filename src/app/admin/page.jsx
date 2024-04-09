import React from "react";
import Styles from "./admin.module.css";
import Link from "next/link";
import TableEvents from "@/components/tableEvents/TableEvents";

const pageAdmin = () => {
	return (
		<div className={Styles.container}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h1 style={{ fontSize: "2rem" }}>
					page admine -liste:
				</h1>
				<Link href="/admin/addEvent" className={Styles.button}>
					ADD EVENT :
				</Link>
			</div>
			<TableEvents />
		</div>
	);
};

export default pageAdmin;
