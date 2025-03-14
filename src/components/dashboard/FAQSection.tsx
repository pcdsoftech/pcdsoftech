import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, SxProps, Theme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface FAQSectionProps {
  className?: string;
  sx?: SxProps<Theme>;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: readonly FAQItem[] = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }
] as const;

const FAQSection: React.FC<FAQSectionProps> = ({ className, sx }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = 
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean): void => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ py: 4, ...sx }} className={className}>
      <Typography variant="h5" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqItems.map((item) => (
        <Accordion 
          key={item.id} 
          expanded={expanded === `panel${item.id}`} 
          onChange={handleChange(`panel${item.id}`)}
        >
          <AccordionSummary
            expandIcon={<IconButton><AddIcon /></IconButton>}
            aria-controls={`panel${item.id}a-content`}
            id={`panel${item.id}a-header`}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
