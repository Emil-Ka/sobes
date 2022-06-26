export interface ITest {
  id: number;
  test_name: string;
  level: string;
  time: number;
  content: IContent;
}

export interface IState {
  tests: ITest[];
}

interface IContent {
  questions: IQuestion[];
}

interface IQuestion {
  id: number;
  type: 'radio' | 'checkbox';
  question: string;
  options: {
    [key: string]: boolean;
  }
}