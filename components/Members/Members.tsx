import memberData from '@/data/members.json';
import MemberList from './MemberList';

export default function Members() {
  return (
    <>
      <MemberList data={memberData.members} title="The Team" />
      <MemberList data={memberData.alumni} title="Alumni" />
    </>
  );
}
