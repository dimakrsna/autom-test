import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextLink } from './styles';

const Content = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h5'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Datenschutzerklärung
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h5'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          1. Datenschutz auf einen Blick
        </Typography>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Allgemeine Hinweise
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
          passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
          Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Datenerfassung auf dieser Website
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
          können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>Wie erfassen wir Ihre Daten?</Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
          Daten handeln, die Sie in ein Kontaktformular eingeben.
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere. ITSysteme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Wofür nutzen wir Ihre Daten?
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
          Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
          Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
          bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Analyse-Tools und Tools von Drittanbietern
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h5'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          2. Hosting
        </Typography>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Externes Hosting
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die
          auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.
          a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
          Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
          bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
          Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
          von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
          Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
          erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Wir setzen folgenden Hoster ein:<br />
          Netlify, Inc.<br />
          44 Montgomery Street<br />
          Suite 300<br />
          San Francisco<br />
          California 94104<br />
          USA<br />
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h5'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          3. Allgemeine Hinweise und Pflichtinformationen
        </Typography>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Datenschutz
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
          dieser Datenschutzerklärung.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
          Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
          und zu welchem Zweck das geschieht.
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Hinweis zur verantwortlichen Stelle
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist: <br />
          Kilian Lenz<br />
          Industriestr. 11<br />
          96317 Kronach<br />
          Telefon: 015772361566<br />
          E-Mail: contact@automatum-data.com<br />
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
          die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
          entscheidet.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Speicherdauer
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
          Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
          berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
          werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
          letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
          Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
          nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
          personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
          49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
          Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
          auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
          Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
          Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
          zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
          Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
          DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
          Absätzen dieser Datenschutzerklärung informiert.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
          datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre
          personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf
          hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann.
          Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden
          herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht
          ausgeschlossen werden, dass US-Behörden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu
          Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese
          Verarbeitungstätigkeiten keinen Einfluss.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
          bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitung bleibt vom Widerruf unberührt.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
          ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
          SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
          WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
          PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
          ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
          WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
          SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
          NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
          VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
          RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
          WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
          SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
          BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
          EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
          VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
          ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
          NACH ART. 21 ABS. 2 DSGVO).

        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Beschwerderecht bei der zuständigen Aufsichtsbehörde
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
          Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
          verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.

        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Recht auf Datenübertragbarkeit
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
          automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
          verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          SSL- bzw. TLS-Verschlüsselung
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
          Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS Verschlüsselung.
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
          „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
          von Dritten mitgelesen werden.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Auskunft, Löschung und Berichtigung
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
          Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
          zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Recht auf Einschränkung der Verarbeitung
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:
        </Typography>
        <Typography component={'ul'} color={'textSecondary'}>
          <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
          <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
          <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
          <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
          <li>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</li>
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Widerspruch gegen Werbe-E-Mails
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
          nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
          Werbeinformationen, etwa durch Spam-E-Mails, vor.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h5'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          4. Datenerfassung auf dieser Website
        </Typography>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Cookies
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf
          Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
          (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
          werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
          gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie
          unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter
          Dienstleistungen des Drittunternehmens (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
          Websitefunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
          von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
          bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der
          Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird.
          Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur
          technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur
          Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die
          Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
          TTDSG); die Einwilligung ist jederzeit widerrufbar.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
          Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
          sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
          Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir Sie hierüber
          im Rahmen dieser Datenschutzerklärung gesondert informieren und ggf. eine Einwilligung abfragen.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Server-Log-Dateien
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-
          Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </Typography>
        <Typography component={'ul'} color={'textSecondary'} mb={2}>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
          ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website –
          hierzu müssen die Server-Log-Files erfasst werden.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Kontaktformular
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
          und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
          der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
          widerrufbar.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
          auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
          (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
          insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Anfrage per E-Mail, Telefon oder Telefax
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
          hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
          bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. B DSGVO, sofern Ihre Anfrage mit
          der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. F DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. A DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
          Widerrufbar.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
          auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
          (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
          insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}></Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h5'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          5. Newsletter
        </Typography>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Newsletterdaten
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine EMail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der
          angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere
          Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für
          den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf
          Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der
          Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit
          widerrufen, etwa über den „Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten
          Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer
          Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der
          Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir
          behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen
          unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
          Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem
          Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger
          Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit
          anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der
          Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des
          Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der
          Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.
        </Typography>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h5'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          6. Plugins und Tools
        </Typography>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          YouTube mit erweitertem Datenschutz
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Diese Website bindet Videos der YouTube ein. Betreiber der Seiten ist die Google Ireland Limited („Google“),
          Gordon House, Barrow Street, Dublin 4, Irland.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass
          YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video
          ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus
          hingegen nicht zwingend ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein Video
          ansehen – eine Verbindung zum Google DoubleClick-Netzwerk her.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine Verbindung zu den Servern von
          YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
          Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt
          Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-
          Account ausloggen.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies auf Ihrem Endgerät speichern
          oder vergleichbare Wiedererkennungstechnologien (z. B. Device-Fingerprinting) einsetzen. Auf diese Weise
          kann YouTube Informationen über Besucher dieser Website erhalten. Diese Informationen werden u. a.
          verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und
          Betrugsversuchen vorzubeugen.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Gegebenenfalls können nach dem Start eines YouTube-Videos weitere Datenverarbeitungsvorgänge
          ausgelöst werden, auf die wir keinen Einfluss haben.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote.
          Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
          Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
          DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
          Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
          Einwilligung ist jederzeit widerrufbar.
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Weitere Informationen über Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung unter:
          <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>
        </Typography>
        <Typography component={'p'} color={'textSecondary'} mb={2}>
          Quelle: <br />
          <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a>
        </Typography>
      </Box>
      <Box>
        <Typography
          variant={'h6'}
          gutterBottom
          sx={{ fontWeight: 'medium', }}>
          Websites that relate to us:
        </Typography>
        <Typography component={'p'} color={'textSecondary'}>
          <TextLink href="https://efs.ai" target="_blank">https://efs.ai</TextLink><br />
          <TextLink href="https://datafromsky.com" target="_blank">https://datafromsky.com</TextLink><br />
          <TextLink href="https://www.terraloupe.com/de" target="_blank">https://www.terraloupe.com/de</TextLink><br />
          <TextLink href="https://www.highd-dataset.com" target="_blank">https://www.highd-dataset.com</TextLink><br />
          <TextLink href="https://levelxdata.com" target="_blank">https://levelxdata.com</TextLink><br />
          <TextLink href="https://dji.com" target="_blank">https://dji.com</TextLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
