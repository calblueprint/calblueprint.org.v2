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
  return (
    <section className="about-page-team-section" id="team">
      <div className="container max-w-[940px]">
        <h2 className="static-page-header marginBot-lg">{title}</h2>
        <div className="">
          <ul className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-[4%]">
            {data.map((member: Member, i) => (
              <li className="about-page-member-item" key={i}>
                <figure>
                  <div className="img-container">
                    <GravatarImage
                      email={member.email}
                      name={`${member.first_name} ${member.last_name}`}
                    />
                  </div>
                  <figcaption>
                    <div className="text-container">
                      <div className="name">
                        {member.first_name} {member.last_name}
                      </div>
                      <div className="position">{member.role}</div>
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
