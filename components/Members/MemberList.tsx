import GravatarImage from './GravatarImage';

type Member = {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
};

type MemberSectionProps = {
  title: string;
  data: Member[];
};

export default function MemberList({ data, title }: MemberSectionProps) {
  const today = new Date();
  const isAprFools = today.getMonth() === 4 && today.getDate() === 1;

  return (
    <section className="py-[30px] sm:py-[50px]" id="team">
      <div className="container mx-auto px-[12px] max-w-[940px]">
        <h2 className="font-bptext text-[28px] sm:text-[36px] font-semibold mb-[32px]">
          {title}
        </h2>
        <div className="">
          <ul className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[4%]">
            {data.map((member: Member, i) => (
              <li className="mb-[30px] w-[31%] sm:w-full" key={i}>
                <figure>
                  <div className="bg-bp-blue bg-opacity-10 rounded-[3px] mb-[8px] h-[130px] sm:h-[160px] relative overflow-hidden w-full">
                    <GravatarImage
                      email={member.email}
                      name={`${member.first_name} ${member.last_name}`}
                    />
                  </div>
                  <figcaption className="flex">
                    <div className="flex-1">
                      <div className="font-bptext text-[16px] font-semibold">
                        {member.first_name} {member.last_name}
                      </div>
                      <div className="text-dark-gray text-opacity-60 text-[14px]">
                        {isAprFools ? 'Free Thinker' : member.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
