import { h } from "preact";
import Avatar from "./avatar";
import Badge from "./badge";
import Button from "./button/button";
import ConveyorBelt from "./conveyorbelt";
import FilePicker from "./filepicker";
import FilmStrip from "./filmstrip";
import Menu from "./menu/menu";
import ProgressBar from "./progress/progressbar";
import Toolbar from "./toolbar";
import Train from "./train";
import ButtonSetMany from "./button/buttonsetmany";
import ButtonSetOne from "./button/buttonsetone";
import MenuButton from "./button/menubutton";
import CSSImage from "./image/cssimage";
import IconFont from "./image/iconfont";
import MenuSelectMany from "./menu/menuselectmany";
import ProgressCircle from "./progress/progresscircle";
import { MasonryItem, MasonryLayout } from "../navlayout/masonry";

const Control = () => {
	const handleFileSelect = (fileNames: any) => {
		console.log("Selected files:", fileNames);
	};

	const handleInvalidFileSelect = (message: any) => {
		console.error("Invalid file selection:", message);
	};
	return (
		<div class="oj-web-applayout-max-width oj-web-applayout-content">
			<MasonryLayout>
				<MasonryItem sizeClass="oj-masonrylayout-tile-2x2">
					<h2 class="oj-typography-heading-sm">Avatar</h2>
					<div>
						<Avatar
							src="images/hcm/placeholder-female-01.png"
							initials="AB"
							size="lg"
							shape="square"
							ariaLabel="Amy Bartlett"
						/>
						<Avatar
							src="images/hcm/placeholder-male-03.png"
							initials="AB"
							size="md"
							shape="square"
							ariaLabel="Amy Bartlett"
						/>
						<Avatar
							src="images/hcm/placeholder-male-04.png"
							initials="AB"
							size="sm"
							shape="square"
							ariaLabel="Amy Bartlett"
						/>
						<Avatar
							src="images/hcm/placeholder-male-05.png"
							initials="AB"
							size="xs"
							shape="square"
							ariaLabel="Amy Bartlett"
						/>
						<Avatar
							src="images/hcm/placeholder-male-06.png"
							initials="AB"
							size="2xs"
							shape="square"
							ariaLabel="Amy Bartlett"
						/>
					</div>
					<br />
					<div>
						<Avatar
							src="images/hcm/placeholder-female-01.png"
							initials="AB"
							size="lg"
							shape="circle"
							ariaLabel="Amy Bartlett"
						/>
						<Avatar
							src="images/hcm/placeholder-male-03.png"
							initials="AB"
							size="md"
							shape="circle"
							ariaLabel="Amy Bartlett"
						/>
						<Avatar
							src="images/hcm/placeholder-male-04.png"
							initials="AB"
							size="sm"
							shape="circle"
							ariaLabel="Amy Bartlett"
						/>
						<Avatar
							src="images/hcm/placeholder-male-05.png"
							initials="AB"
							size="xs"
							shape="circle"
							ariaLabel="Amy Bartlett"
						/>
						<Avatar
							src="images/hcm/placeholder-male-06.png"
							initials="AB"
							size="2xs"
							shape="circle"
							ariaLabel="Amy Bartlett"
						/>
					</div>
				</MasonryItem>
				<MasonryItem sizeClass="oj-masonrylayout-tile-2x1">
					<h2 class="oj-typography-heading-sm">Badge</h2>
					<Badge text="Neutral" /> &nbsp;
					<Badge text="Danger" color="danger" /> &nbsp;
					<Badge text="Warning" color="warning" subtle /> &nbsp;
					<Badge text="Success" color="success" subtle /> &nbsp;
				</MasonryItem>
				<MasonryItem sizeClass="oj-masonrylayout-tile-2x3">
					<h2 class="oj-typography-heading-sm">Button</h2>
					<div>
						<Button
							text="Button Text 1"
							onClick={() => console.log("Button clicked")}
						/>
						<br />
						<br />
						<Button text="Icon Button" iconStartClass="oj-ux-ico-information" />
						<br />
						<br />
						<Button text="Disabled Button" disabled={true} />
						<br />
						<br />
						<Button
							text="Call To Action"
							chroming="callToAction"
							fullWidth={true}
						/>
					</div>
					<br />
					<div>
						<ButtonSetMany />
					</div>
					<br />
					<div>
						<ButtonSetOne />
					</div>
					<br />
					<div>
						<MenuButton />
					</div>
				</MasonryItem>
				<MasonryItem sizeClass="oj-masonrylayout-tile-2x2">
					<h2 class="oj-typography-heading-sm">Menu</h2>
					<div>
						<Menu />
					</div>
					<div>
						<MenuButton />
					</div>
					<br />
					<div>
						<MenuSelectMany />
					</div>
				</MasonryItem>
				<MasonryItem sizeClass="oj-masonrylayout-tile-2x1">
					<h2 class="oj-typography-heading-sm">Progress Bar</h2>
					<div>
						<ProgressBar />
					</div>
					<div>
						<ProgressCircle />
					</div>
				</MasonryItem>
				<MasonryItem sizeClass="oj-masonrylayout-tile-2x2">
					<h2 class="oj-typography-heading-sm">File Picker</h2>
					<FilePicker
						onFileSelect={handleFileSelect}
						onInvalidFileSelect={handleInvalidFileSelect}
					/>
				</MasonryItem>
				<MasonryItem sizeClass="oj-masonrylayout-tile-2x1">
					<h2 class="oj-typography-heading-sm">Film Strip</h2>
					<FilmStrip />
				</MasonryItem>
			</MasonryLayout>
			<MasonryLayout>
				<MasonryItem sizeClass="oj-masonrylayout-tile-3x1">
					<h2 class="oj-typography-heading-sm">Conveyor Belt</h2>
					<ConveyorBelt>
						<Button
							text="Button 1"
							onClick={() => console.log("Button 1 clicked")}
						/>
						&nbsp;
						<Button
							text="Button 2"
							onClick={() => console.log("Button 2 clicked")}
						/>
						&nbsp;
						<Button
							text="Button 3"
							onClick={() => console.log("Button 3 clicked")}
						/>
						&nbsp;
						<Button
							text="Button 4"
							onClick={() => console.log("Button 4 clicked")}
						/>
						&nbsp;
						<Button
							text="Button 5"
							onClick={() => console.log("Button 5 clicked")}
						/>
						&nbsp;
						<Button
							text="Button 6"
							onClick={() => console.log("Button 5 clicked")}
						/>
					</ConveyorBelt>
				</MasonryItem>
				<MasonryItem sizeClass="oj-masonrylayout-tile-3x1">
					<h2 class="oj-typography-heading-sm">Toolbar</h2>
					<Toolbar />
				</MasonryItem>
			</MasonryLayout>
			<MasonryLayout>
				<MasonryItem sizeClass="oj-masonrylayout-tile-3x1">
					<h2 class="oj-typography-heading-sm">Train</h2>
					<Train />
				</MasonryItem>
			</MasonryLayout>
		</div>
	);
};
export default Control;
