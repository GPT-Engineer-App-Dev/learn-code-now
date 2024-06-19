import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { Box, Button, VStack, useToast } from '@chakra-ui/react';

const CodeEditor = () => {
  const editorRef = useRef(null);
  const [code, setCode] = useState('// Write your code here');
  const toast = useToast();

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleRunCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(editorRef.current.getValue());
      toast({
        title: 'Code executed successfully!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error executing code',
        description: error.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Box height="400px" borderWidth="1px" borderRadius="md" overflow="hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          onMount={handleEditorDidMount}
          onChange={(value) => setCode(value)}
        />
      </Box>
      <Button colorScheme="teal" onClick={handleRunCode}>
        Run Code
      </Button>
    </VStack>
  );
};

export default CodeEditor;