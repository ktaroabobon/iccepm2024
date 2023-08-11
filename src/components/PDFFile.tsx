import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create Document Component
// pdfのURLを引数にとりそれを表示する
export const PdfViewer: React.FC = () => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.body}>
          {/*<View></View>*/}
          <Text style={styles.header} fixed>
            PDF
          </Text>
          <Text style={styles.text}>PDF</Text>
        </Page>
      </Document>
    </>
  );
};
