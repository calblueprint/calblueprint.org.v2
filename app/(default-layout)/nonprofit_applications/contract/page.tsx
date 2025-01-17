import Markdown from 'react-markdown';
import { contract } from '@/data/contract';

export default function ContractPage() {
  return (
    <div className="mdContent">
      <Markdown>{contract}</Markdown>
    </div>
  );
}
