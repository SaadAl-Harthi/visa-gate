import { schengenVisaPage } from "../data/visas";
import VisaPageTemplate from "./VisaPageTemplate";

export default function SchengenVisaContent() {
  return <VisaPageTemplate data={schengenVisaPage} />;
}
