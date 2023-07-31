export interface OutputDetails {
  id: string;
  title: string;
}

const sampleOutputData: OutputDetails[] = [
  {
    id: "output1",
    title: "Output 1",
  },
  {
    id: "output2",
    title: "Output 2",
  },
  {
    id: "output3",
    title: "Output 3",
  },
  {
    id: "output4",
    title: "Output 4",
  },
  {
    id: "output5",
    title: "Output 5",
  },
];

export const getOutputsDetails = async (): Promise<OutputDetails[]> => {
  return sampleOutputData;
};
