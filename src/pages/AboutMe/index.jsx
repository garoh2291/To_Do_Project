import { Outlet } from "react-router-dom";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import "./styles.css";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

export const AboutPage = () => {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h2>For Web</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <h2>For Mobile</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <h2>Mobile Aplication</h2>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div className="section-3">
            <h2>
              <Animator animation={MoveIn(-1000, 0)}>Html</Animator>
              <Animator animation={MoveIn(1000, 0)}>Css</Animator>
              <Animator animation={MoveIn(1000, 0)}>JS</Animator>
              <Animator animation={Zoom()}>React</Animator>
            </h2>
          </div>
        </ScrollPage>
      </ScrollContainer>
      <Outlet></Outlet>
    </div>
  );
};
